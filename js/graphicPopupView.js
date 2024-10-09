import Adapt from 'core/js/adapt';
import React from 'react';
import ReactDOM from 'react-dom';
import { templates, compile } from 'core/js/reactHelpers';

class GraphicPopupView extends Backbone.View {

  className() {
    return 'graphic-popup';
  }

  initialize() {
    this.render();
  }

  onCloseClick() {
    Adapt.trigger('notify:close');
  }

  render() {
    ReactDOM.render(<templates.graphicPopup {...this.model.toJSON()} />, this.el);
  }

};

export default GraphicPopupView;
