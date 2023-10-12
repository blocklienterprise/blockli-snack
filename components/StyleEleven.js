import * as React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const StyelEleven = () => {
  return (
      <View style={styles.styleeleven}>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image4.png")}
        />
        <Image
          style={[styles.image3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image3.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image2.png")}
        />
        <Image
          style={[styles.image1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
        <View style={styles.cardDetails}>
          <Text style={[styles.title, styles.titleFlexBox]}>
            Textile Designer Community
          </Text>
          <Text style={[styles.description, styles.titleFlexBox]} numberOfLines={3}>
            Join top textile designers community now.oin top textile designers community now.
            oin top textile designers community now.</Text>
        </View>
        <Pressable style={styles.cta}>
          <Text style={styles.ctaText}>Join Community</Text>
        </Pressable>
      </View>
  );
};



const styles = StyleSheet.create({
  titleFlexBox: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  iconLayout: {
    bottom: "63.86%",
    top: "16.61%",
    width: "15.7%",
    height: "19.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ctaText: {
    marginTop: -8.16,
    top: "50%",
    left: "17.05%",
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#fff",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  cta: {
    height: "14.27%",
    width: "40.51%",
    top: "65.26%",
    right: "29.7%",
    bottom: "20.47%",
    left: "29.79%",
    borderRadius: 5,
    marginTop: 30,
    backgroundColor: "#00cf99",
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#1d1d1d",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  description: {
    fontSize: 14,
    letterSpacing: -1,
    lineHeight: 19,
    fontFamily: "Inter-Regular",
    color: "rgba(138, 149, 158, 0.8)",
    marginTop: 5,
  },
  cardDetails: {
    top: 125,
    left: 41,
    width: 288,
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
    position: "absolute",
  },
  image4Icon: {
    height: "18.13%",
    width: "14.57%",
    top: "17.31%",
    right: "58.65%",
    bottom: "64.56%",
    left: "26.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image3Icon: {
    right: "45.86%",
    left: "38.44%",
  },
  image2Icon: {
    right: "35.81%",
    left: "48.5%",
  },
  image1Icon: {
    right: "26.03%",
    left: "58.27%",
  },
  styleeleven: {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 370,
    height: 297,
    overflow: "hidden",
  },
  apppage: {
    backgroundColor: "#fafafa",
    width: 430,
    height: 932,
    paddingHorizontal: 30,
    paddingVertical: 83,
    overflow: "hidden",
  },
});

export default StyelEleven;
