package com.example.kaizevent.dto;

import java.util.List;

public class CartOderDto {
    List<CartDto> cartDtos;

    public CartOderDto() {
    }

    public CartOderDto(List<CartDto> cartDtos) {
        this.cartDtos = cartDtos;
    }

    public List<CartDto> getCartDtos() {
        return cartDtos;
    }

    public void setCartDtos(List<CartDto> cartDtos) {
        this.cartDtos = cartDtos;
    }
}
