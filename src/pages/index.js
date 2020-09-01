import React from "react";
import { Helmet } from "react-helmet";
import { ArrowUp, GitHub, Linkedin, Mail } from 'react-feather';
import './styles.scss';

import Image from '../components/Image';

export default function Home() {
  return (
    <div className="heading-container">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,600&amp;display=swap" rel="stylesheet" />
      </Helmet>
      <ArrowUp className="to-top-icon" />
      <div className="heading-image-container">
        <Image />
      </div>
      <div className="heading-name-container">
        <h className="heading-name">Nelson Swindler</h>
        <div className="heading-icon-row">
          <GitHub className="heading-icon" />
          <Linkedin className="heading-icon" />
          <Mail className="heading-icon" />
        </div>
      </div>
    </div>
  );
}
