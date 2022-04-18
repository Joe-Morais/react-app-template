import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './sidenav.css';

const Sidenav = () => {
  return (    
    <div id='sidenav-parent'>

      {/* The sidenav itself */}
      <CDBSidebar id='sidenav'>  

        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" id='header-link'>P22</a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidenav-content">          
          <CDBSidebarMenu id='sidenav-menu'>          

            <NavLink exact={true} to="/" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="columns">
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>            

            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem class='testactive' icon="cog">Settings</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter id='footer'>
          <div id='footer-content'>
            Footer
          </div>
        </CDBSidebarFooter>

      </CDBSidebar>
    </div>
  );
};

export default Sidenav;
