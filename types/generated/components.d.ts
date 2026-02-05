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

export interface FormEmail extends Struct.ComponentSchema {
  collectionName: 'components_form_emails';
  info: {
    displayName: 'email';
    icon: 'envelop';
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

export interface FormFileUpload extends Struct.ComponentSchema {
  collectionName: 'components_form_file_uploads';
  info: {
    displayName: 'fileUpload';
    icon: 'attachment';
  };
  attributes: {
    field_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-name.field-name'
    >;
    hint: Schema.Attribute.String;
    label: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormInput extends Struct.ComponentSchema {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'input';
    icon: 'pencil';
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
      'ui-components.form-renderer': UiComponentsFormRenderer;
    }
  }
}
