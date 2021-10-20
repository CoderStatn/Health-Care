import React from 'react';
import { useState, useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            {
                services.map((service) => <Service
                key={service.id}>    
                </Service>)
            }
        </div>
    );
};

export default Services;