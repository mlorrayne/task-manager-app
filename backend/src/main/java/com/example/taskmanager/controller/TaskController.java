package com.example.taskmanager.controller;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins ="*")
public class TaskController {
    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<Task> getAll() {return service.findAll(); }

    @PostMapping
    public Task create(@RequestBody Task task){
        return service.save(task);
    }

    @DeleteMapping("/id")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
