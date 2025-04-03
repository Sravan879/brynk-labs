package com.example.abc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.abc.model.Heading;
import com.example.abc.service.HeadingService;

@RestController
@RequestMapping("/api/heading")
@CrossOrigin("*")
public class HeadingController {
    @Autowired private HeadingService service;

    @PostMapping
    public Heading save(@RequestBody Heading heading) {
        return service.saveHeading(heading);
    }

    @GetMapping
    public Heading get() {
        return service.getLatestHeading();
    }
}
