import React from 'react';
import { Checkbox, Button, Toolbar, ToolbarItem } from "carbon-components-react";
import { Add32, Label32, ArrowRight24, Restaurant16, ChartBar16 } from '@carbon/icons-react';

class App extends React.Component {

  checkboxCB = (txt) => {
    alert(txt);
  }

  render() {
    return (<div>
      {this.props.title}
      <br />
      <br />

      <Add32 />
      <ArrowRight24 />
      <Label32 />

      <br />
      <br />

      <Checkbox
        id="IDofCheckbox"
        onChange={(checked, id, event) => { this.checkboxCB(id) }}
        labelText="CheckBox"
      />

      <br />
      <br />

      <Toolbar>
        <ToolbarItem>
          <Button id="btnList" onClick={() => this.checkboxCB("Restaurant")} size="lg" kind="ghost">
            <Restaurant16 />
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button id="btnEdit" onClick={() => this.checkboxCB("Edit")} size="lg" title="Edit">
            Edit
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <ChartBar16 size={16} />
        </ToolbarItem>
      </Toolbar>

    </div>)
  }
}
export default App;
