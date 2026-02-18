import type { Schema, Struct } from '@strapi/strapi';

export interface FormArrayForm extends Struct.ComponentSchema {
  collectionName: 'components_form_array_forms';
  info: {
    displayName: 'arrayForm';
    icon: 'plus';
  };
  attributes: {
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    form: Schema.Attribute.Relation<'oneToOne', 'api::form.form'>;
    maxItems: Schema.Attribute.Integer;
    minItems: Schema.Attribute.Integer;
  };
}

export interface FormDateInput extends Struct.ComponentSchema {
  collectionName: 'components_form_date_inputs';
  info: {
    displayName: 'dateInput';
    icon: 'calendar';
  };
  attributes: {
    closeIcon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    disabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    hint: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    maxYear: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'2040'>;
    minYear: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'1926'>;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showFooterBtns: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showHeader: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    type: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'simple'>;
    variant: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface FormDropdown extends Struct.ComponentSchema {
  collectionName: 'components_form_dropdowns';
  info: {
    displayName: 'dropdown';
    icon: 'bulletList';
  };
  attributes: {
    data_source: Schema.Attribute.Relation<
      'oneToOne',
      'api::data-source.data-source'
    >;
    disabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    hint: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface FormEmail extends Struct.ComponentSchema {
  collectionName: 'components_form_emails';
  info: {
    displayName: 'email';
    icon: 'envelop';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    hint: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showVerifyButton: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface FormFileUpload extends Struct.ComponentSchema {
  collectionName: 'components_form_file_uploads';
  info: {
    displayName: 'fileUpload';
    icon: 'attachment';
  };
  attributes: {
    allowedFileSize: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    description: Schema.Attribute.Text;
    disabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    fileFormat: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'application/pdf,image/jpeg,image/png,image/heic,image/heif'>;
    fileNumberLimit: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    hint: Schema.Attribute.String;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Label'>;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    state: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface FormInput extends Struct.ComponentSchema {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'input';
    icon: 'pencil';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    hint: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    maxLength: Schema.Attribute.Integer;
    minLength: Schema.Attribute.Integer;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    type: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface FormMobile extends Struct.ComponentSchema {
  collectionName: 'components_form_mobiles';
  info: {
    displayName: 'mobile';
    icon: 'phone';
  };
  attributes: {
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    hint: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormRadio extends Struct.ComponentSchema {
  collectionName: 'components_form_radios';
  info: {
    displayName: 'radio';
  };
  attributes: {
    data_source: Schema.Attribute.Relation<
      'oneToOne',
      'api::data-source.data-source'
    >;
    disabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    hint: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showRadioButton: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'small'>;
  };
}

export interface FormTextArea extends Struct.ComponentSchema {
  collectionName: 'components_form_text_areas';
  info: {
    displayName: 'textArea';
    icon: 'write';
  };
  attributes: {
    className: Schema.Attribute.Text & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String;
  };
}

export interface UiComponentsFormRenderer extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_form_renderers';
  info: {
    displayName: 'formRenderer';
    icon: 'layout';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiComponentsHtmlContent extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_html_contents';
  info: {
    displayName: 'htmlContent';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    textContent: Schema.Attribute.Text;
  };
}

export interface UiComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_images';
  info: {
    displayName: 'image';
    icon: 'picture';
  };
  attributes: {
    className: Schema.Attribute.Text;
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form.array-form': FormArrayForm;
      'form.date-input': FormDateInput;
      'form.dropdown': FormDropdown;
      'form.email': FormEmail;
      'form.file-upload': FormFileUpload;
      'form.input': FormInput;
      'form.mobile': FormMobile;
      'form.radio': FormRadio;
      'form.text-area': FormTextArea;
      'ui-components.form-renderer': UiComponentsFormRenderer;
      'ui-components.html-content': UiComponentsHtmlContent;
      'ui-components.image': UiComponentsImage;
    }
  }
}
