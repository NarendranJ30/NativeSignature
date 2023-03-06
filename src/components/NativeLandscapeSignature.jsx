import { Component, createElement } from "react";
import Signature from "react-native-signature-canvas";
import { StyleSheet, View, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const isPortrait = windowHeight > windowWidth;

export class NativeLandscapeSignature extends Component {
    render() {
        const style = `body,html { width: 100%; height: 100%; }`;
        return (
            <View style={isPortrait ? styles.PortraitRotate : styles.Landscape}>
                <Signature
                    descriptionText={this.props.descriptionText}
                    clearText={this.props.clearText}
                    confirmText={this.props.confirmText}
                    onOK={this.props.onOK}
                    onEmpty={this.props.onEmpty}
                    webStyle={this.props.webStyle}
                    autoClear={this.props.autoClear}
                    backgroundColor={"rgba(255,255,255)"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    PortraitRotate: {
        paddingLeft: "10%",
        transform: [{ rotate: "-90deg" }],
        position: "absolute",
        height: windowHeight,
        width: windowHeight,
        opacity: 0.97,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    Landscape: {
        paddingLeft: "10%",
        transform: [{ rotate: "0deg" }],
        position: "absolute",
        height: windowHeight,
        width: windowWidth,
        opacity: 0.97,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});
