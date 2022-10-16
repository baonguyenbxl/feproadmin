
import './App.css';
// upload file form
import { Upload } from "./components/uploadfile/uploadForm";
// floating shadowed menu button
import { FloatingActionButtons } from "./components/floatmenu/floatmenu.js";
// accordions 
import { CustomizedAccordions } from "./components/accordion/accordion";
// floating bottom menu
import { LabelBottomNavigation } from "./components/bottommenu/bottommenu";
// swipeable dialog
import { SwipeableEdgeDrawer } from "./components/swipable/swipable";
// inbox container
import { PermanentDrawerLeft} from "./components/drawerleft/drawerleft"
// dialog tool
import { SpeedDialTooltipOpen } from "./components/dialogtool/dialogtool"
// vertical timeline
import { CustomizedTimeline } from "./components/timeline/timeline";
// treeview
import { BarTreeView } from "./components/treeview/treeview";
// switch
import { CustomizedSwitches } from "./components/switch/switch";
// date time pickers
import { NativePickers } from "./components/datetime/datetime";
// STEPPER
import { CustomizedSteppers } from "./components/stepper/stepper"
// left panel
import { HiddenDrawer } from "./components/hiddenpanel/hiddenpanel";

function App ()
{
  return (
    <div className="App">
      <FloatingActionButtons />
    </div>
  );
}

export default App;
