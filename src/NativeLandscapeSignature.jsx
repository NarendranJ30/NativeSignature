import { Component, createElement } from "react";

import { NativeLandscapeSignature as WrappedNativeSignature } from "./components/NativeLandscapeSignature";

export class NativeLandscapeSignature extends Component {
    onSubmitHandler = img => {
        this.props.signature.setValue(img);
        if (this.props.onSubmitSignature) {
            this.props.onSubmitSignature.execute();
        }
    };

    onSubmitEmpty = () => {
        this.props.signature.setValue("");
        if (this.props.onEmptySignature) {
            this.props.onEmptySignature.execute();
        }
    };

    render() {
        //Read widgetconfiguration
        const {
            signature,
            onSubmitSignature,
            onEmptySignature,
            autoClear,
            descriptionText,
            clearText,
            confirmText,
            buttonBackgroundColorSave,
            buttonTextColorSave,
            buttonBackgroundColorClear,
            buttonTextColorClear
        } = this.props;

        //Set default values
        const props = {
            descriptionText: descriptionText.value,
            clearText: clearText.value,
            confirmText: confirmText.value,
            onOK: this.onSubmitHandler,
            onEmpty: this.onSubmitEmpty,
            webStyle: `.m-signature-pad--footer
            .button.save {
                background-color: ${buttonBackgroundColorSave ? buttonBackgroundColorSave : "#76CA02"};
                color: ${buttonTextColorSave ? buttonTextColorSave : "#FFF"};
              }
        .m-signature-pad--footer
         .button.clear {
                background-color: ${buttonBackgroundColorClear ? buttonBackgroundColorClear : "#ed1c24"};
                color: ${buttonTextColorClear ? buttonTextColorClear : "#FFF"};
              }`,
            autoClear: autoClear
        };

        return <WrappedNativeSignature {...props} />;
    }
}
