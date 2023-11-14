package com.example.kaizevent.controller;

import com.example.kaizevent.model.AuthenticationRequest;
import com.example.kaizevent.model.AuthenticationResponse;
import com.example.kaizevent.model.RegisterRequest;
import com.example.kaizevent.service.impl.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")

public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;
//    @PostMapping("/register")
//    public ResponseEntity<?> responseResponseEntity(@RequestBody RegisterRequest registerRequest){
//        AuthenticationResponse authenticationResponse = authenticationService.register(registerRequest);
//        if(authenticationResponse.getErrMsg() != null){
//            return ResponseEntity.status(HttpStatus.CONFLICT)
//                    .body(authenticationResponse.getErrMsg());
//        }
//        return ResponseEntity.ok(authenticationResponse.getToken());
//    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> responseResponseEntity(@RequestBody AuthenticationRequest authenticationRequest){

        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }
}