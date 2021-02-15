import React, { ChangeEvent, MouseEvent } from "react";
import Header from "./header";
import Main from "./main";
import Sidebar from "./sidebar";

interface Props {}

interface State {
  isSidebarOpen: boolean;
  userName: string;
}

class App extends React.Component<Props, State> {
  state: State = {
    isSidebarOpen: false,
    userName: ''
  }

  handleMenuClick = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  renderUserName = (userName: string) => {
      this.setState({userName})
  }

  render() {
    return (
      <>
        <Header 
          onMenuClick={this.handleMenuClick} 
          userName={this.state.userName}
        />
        <Main
          setUserName={this.renderUserName}
          userName={this.state.userName}
        />
        <Sidebar 
          isOpen={this.state.isSidebarOpen}
          onSidebarClose={this.handleMenuClick}
        />
      </>
    );
  }
  }

export default App;
