package com.example.demo.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name = "place" )
public class Place {

    @Id
    @Column( name = "place_id" )
    private String placeID;

    @Column( name = "place" )
    private String place;

    @Column( name = "airport_name" )
    private String airportName;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JsonIgnore
    private Set<Ticket> lstTicketPlace;

    public Place() {

        super();

    }

    
    public Place(String place, String airportName) {

        super();
        this.place = place;
        this.airportName = airportName;

    }

    public String getPlace() { return place; }

    public void setPlace( String place ) { this.place = place; }

    public String getAirportName() { return airportName; }

    public void setAirportName( String airportName ) { this.airportName = airportName; }

    public Set<Ticket> getLstTicketPlace() { return lstTicketPlace; }

    public void setLstTicketPlace( Set<Ticket> lstTicketPlace ) {

        this.lstTicketPlace = lstTicketPlace;

    }

    public String getPlaceID() { return placeID; }

}
