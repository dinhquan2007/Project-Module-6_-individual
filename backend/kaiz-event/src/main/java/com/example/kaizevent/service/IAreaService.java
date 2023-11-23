package com.example.kaizevent.service;

import com.example.kaizevent.model.Area;

import java.util.List;

public interface IAreaService {
    List<Area> getAllByIdEvent(Long id);

    Area getById(Long id);
}
