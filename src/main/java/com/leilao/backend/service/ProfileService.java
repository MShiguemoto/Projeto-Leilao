package com.leilao.backend.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;

import com.leilao.backend.model.Profile;
import com.leilao.backend.repository.ProfileRepository;

import jakarta.mail.MessagingException;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private EmailService emailService;

    public Profile create(Profile profile) throws MessagingException {
        Profile profileSaved = profileRepository.save(profile);

        Context context = new Context();
        context.setVariable("name", profileSaved.getName());

        emailService.sendTemplateEmail(profileSaved.getEmail(), "Cadastro Efetuado com sucesso", context, "emailWelcome");
        return profileSaved;
    }

    public Profile update(Profile profile) {
        // return profileRepository.save(profile);
        Profile profileSaved = profileRepository.findById(profile.getId())
                .orElseThrow(() -> new NoSuchElementException("Objeto não encontrado"));

        profileSaved.setName(profile.getName());

        return profileRepository.save(profile);
    }

    public void delete(Long id) {
        Profile profileSaved = profileRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Objeto não encontrado"));

        profileRepository.delete(profileSaved);
    }

    public List<Profile> listAll() {
        return profileRepository.findAll();
    }
}
