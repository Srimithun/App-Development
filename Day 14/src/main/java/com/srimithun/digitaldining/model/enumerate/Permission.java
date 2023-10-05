package com.srimithun.digitaldining.model.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:READ"),
    ADMIN_CREATE("admin:CREATE"),
    ADMIN_UPDATE("admin:UPDATE"),
    ADMIN_DELETE("admin:DELETE"),

    STAFF_READ("employee:READ"),
    STAFF_CREATE("employee:CREATE"),
    STAFF_UPDATE("employee:UPDATE"),
    STAFF_DELETE("employee:DELETE")
    ;
    
    @Getter
    private final String permission;



}
