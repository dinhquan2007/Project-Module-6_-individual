package com.example.kaizevent.service.impl;

import com.example.kaizevent.model.Area;
import com.example.kaizevent.repository.IAreaRepository;
import com.example.kaizevent.service.IAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AreaService implements IAreaService {
    @Autowired
    private IAreaRepository areaRepository;
    @Override
    public List<Area> getAllByIdEvent(Long id) {
        return areaRepository.getAllByIdEvent(id);
    }

    @Override
    public Area getById(Long id) {
        return areaRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Area area) {
        areaRepository.save(area);
    }
}
