package task.tracker.controllers;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import task.tracker.dto.TodoDTO;

@Controller
@RequestMapping("/tasks")
public class TaskJsonController {

	@Autowired
	DataSource dataSource;

	@RequestMapping(path = "{id:\\d+}", method = RequestMethod.GET)
	public @ResponseBody TodoDTO getTask(@PathVariable long id, HttpServletResponse response) {
		TodoDTO result = new TodoDTO();
		try {
			PreparedStatement select = dataSource.getConnection()
					.prepareStatement("SELECT id, name FROM todos WHERE id=?");
			select.setLong(1, id);
			ResultSet rs = select.executeQuery();
			if (rs.next()) {
				result.id = rs.getInt(1);
				result.name = rs.getString(2);
			} else {
				response.setStatus(HttpStatus.NOT_FOUND.value());
				return null;
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
		}
		return result;
	}

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<TodoDTO> getTasks(HttpServletResponse response) {
		List<TodoDTO> result = new ArrayList<>();
		try {
			PreparedStatement select = dataSource.getConnection().prepareStatement("SELECT id, name FROM todos");
			ResultSet rs = select.executeQuery();
			while (rs.next()) {
				TodoDTO dto = new TodoDTO();
				dto.id = rs.getInt(1);
				dto.name = rs.getString(2);
				result.add(dto);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
		}
		return result;
	}
}
