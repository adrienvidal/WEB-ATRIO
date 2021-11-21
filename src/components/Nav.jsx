import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link as RouterLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <Menu>
      <Menu.Item>
        <RouterLink to="/">
          RobotDemoApp
        </RouterLink>
      </Menu.Item>
      <Menu.Item>
        <RouterLink to="/">
          Accueil
        </RouterLink>
      </Menu.Item>
      <Menu.Item>
        <RouterLink to="/articles">
          Liste des articles
        </RouterLink>
      </Menu.Item>
    </Menu>
  )
}
