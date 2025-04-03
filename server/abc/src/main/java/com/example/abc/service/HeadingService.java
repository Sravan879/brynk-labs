package com.example.abc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.abc.model.Heading;
import com.example.abc.repository.HeadingRepository;

@Service
public class HeadingService {
    @Autowired private HeadingRepository repo;

    public Heading saveHeading(Heading heading) {
        return repo.save(heading);
    }

    public Heading getLatestHeading() {
        return repo.findAll().get(0);
    }
}

