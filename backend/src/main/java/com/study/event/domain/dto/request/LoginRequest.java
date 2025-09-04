package com.study.event.domain.dto.request;

public record LoginRequest(
        String email,
        String password
) {
}
