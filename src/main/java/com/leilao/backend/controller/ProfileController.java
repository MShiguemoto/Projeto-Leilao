package com.leilao.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.leilao.backend.model.Profile;
import com.leilao.backend.service.ProfileService;

import jakarta.mail.MessagingException;
import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping
    public Profile create(@Validated @RequestBody Profile profile) throws MessagingException {
        return profileService.create(profile);
    }

    @PutMapping
    public Profile update(@Validated @RequestBody Profile profile) throws MessagingException {
        return profileService.create(profile);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathParam("id") Long id) {
        profileService.delete(id);
    }

    @GetMapping("/delete")
    public void find(@PathVariable("name") String name) {
        profileService.delete(null);
    }

    @GetMapping
    public List<Profile> listALL() {
        return profileService.listAll();
    }
}
