package com.User2.ToDoApp.model;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
public class User implements UserDetails {

    @Id
    @SequenceGenerator(
            name = "person_Sequence",
            sequenceName = "person_Sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "person_Sequence"
    )
    private Long id;
    private String name;
    private String userName;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    private Boolean locked;
    private Boolean enabled;

    public User(String name, String userName, String email, String password, UserRole userRole, Boolean locked, Boolean enabled) {
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
        this.locked = locked;
        this.enabled = enabled;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(userRole.name());
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
