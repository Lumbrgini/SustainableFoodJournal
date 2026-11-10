import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { Route, Navigate } from "react-router-dom";
import { home, statsChart, restaurant } from "ionicons/icons";

import Home from "../pages/Home";
import Graphs from "../pages/Graphs";
import Tracker from "../pages/Tracker";

function Router() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" element={<Home />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="graphs" href="/graphs">
            <IonIcon icon={statsChart} />
            <IonLabel>Graphs</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tracker" href="/tracker">
            <IonIcon icon={restaurant} />
            <IonLabel>Tracker</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default Router;
