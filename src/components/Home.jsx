import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link as RouterLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1>Bienvenue sur votre page d'accueil</h1>
        <p>Test technique pour les développeurs Angular, React ou Vue.js</p>
        <Button as={RouterLink} to="/articles">
          Voir la liste des articles
        </Button>
      </div>
    </div>
  )
}
