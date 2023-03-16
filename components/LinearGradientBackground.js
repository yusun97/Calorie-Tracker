import { commonStyle } from "./CommonStyle";
// import { LinearGradient } from "expo-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

export default function LinearGradientBackground(props) {
  return (
    <LinearGradient
      style={commonStyle.generalContainer}
      colors={["lightskyblue", "darkslateblue"]}
    >
      {props.children}
    </LinearGradient>
  );
}
