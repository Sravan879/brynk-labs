package com.example.abc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.abc.model.Heading;

@Repository
public interface HeadingRepository extends JpaRepository<Heading, Long> {}
