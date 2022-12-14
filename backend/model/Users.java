package com.example.demo.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Users implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "user_id" )
    private long userID;

    @Column( name = "full_name" )
    private String fullName;

    private String gender;

    private String address;

    private String phone;

    private String email;

    @OneToMany( mappedBy = "users", fetch = FetchType.LAZY )
    @JsonIgnore
    private Set<Receipt> lstReceipt;

    public Users() {

        super();

    }

    public String getFullName() { return fullName; }

    public void setFullName( String fullName ) { this.fullName = fullName; }

    public String isGender() { return gender; }

    public void setGender( String gender ) { this.gender = gender; }

    public String getAddress() { return address; }

    public void setAddress( String address ) { this.address = address; }

    public String getPhone() { return phone; }

    public void setPhone( String phone ) { this.phone = phone; }

    public String getEmail() { return email; }

    public void setEmail( String email ) { this.email = email; }

    public Set<Receipt> getLstReceipt() { return lstReceipt; }

    public void setLstReceipt( Set<Receipt> lstReceipt ) { this.lstReceipt = lstReceipt; }

    public long getUserID() { return userID; }

}
