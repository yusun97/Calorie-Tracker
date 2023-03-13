import { commonStyles } from "./commonStyles ";
// import { LinearGradient } from "expo-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

export default function LinearGradientBackground(props) {
  return (
    <LinearGradient
      style={commonStyles.generalContainer}
      colors={["lightskyblue", "darkslateblue"]}
    >
      {props.children}
    </LinearGradient>
  );
}
