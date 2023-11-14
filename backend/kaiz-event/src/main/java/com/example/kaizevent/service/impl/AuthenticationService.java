package com.example.kaizevent.service.impl;
import com.example.kaizevent.config.JwtService;
import com.example.kaizevent.model.AppUser;
import com.example.kaizevent.model.AuthenticationRequest;
import com.example.kaizevent.model.AuthenticationResponse;
import com.example.kaizevent.model.RegisterRequest;
import com.example.kaizevent.repository.IAppUserRepository;import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AuthenticationService {
    @Autowired
    private IAppUserRepository appUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;


//    public AuthenticationResponse register(RegisterRequest registerRequest) {
//        AppUser appUser = appUserRepository.getAccountByUserName(registerRequest.getUsername());
//        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
//        if(appUser!=null) {
//            authenticationResponse.setToken(null);
//            authenticationResponse.setErrMsg("Tài khoản đã tồn tại!");
//            return authenticationResponse;
//        }
//        appUserRepository.createAccount(registerRequest.getUsername(), passwordEncoder.encode(registerRequest.getPassword()), 1L);
//        AppUser accountUserNew = appUserRepository.getAccountByUserName(registerRequest.getUsername());
//        authenticationResponse.setToken(jwtService.generateToken(accountUserNew));
//        authenticationResponse.setErrMsg(null);
//        return authenticationResponse;
//    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );
        AppUser accountUser = appUserRepository.getAccountByUserName(authenticationRequest.getUsername());
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setToken(jwtService.generateToken(accountUser));
        return authenticationResponse;
    }
}