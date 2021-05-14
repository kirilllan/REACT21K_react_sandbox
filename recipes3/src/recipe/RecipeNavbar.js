import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { Layout, Menu} from 'antd';
const { Header, Content, Footer } = Layout;

export default function RecipeNavbar() {
  const history = useHistory();
  const signOut = async () => {
    await auth.signOut();
    history.push('/');
  }
  return ( 
    <div className="recipe-navbar">
      <Layout>
      <Header>
      {/* <ul>
        <li>
          <Link to="/">All recipes</Link>
         </li>
         <li>
          <Link to="/new">Add new recipe</Link>
         </li>
         <li>
           <button onClick={signOut}>Log out</button>
         </li>
      </ul> */}
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to="/">All recipes</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/new">Add new recipe</Link></Menu.Item>
        <Menu.Item key="3"><button onClick={signOut}>Log out</button></Menu.Item>
      </Menu>
      </Header>
      </Layout> 
    </div>
  )
}
