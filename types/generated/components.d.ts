import type { Schema, Struct } from '@strapi/strapi';

export interface ContactOptions extends Struct.ComponentSchema {
  collectionName: 'components_contact_options';
  info: {
    displayName: 'options';
  };
  attributes: {
    label: Schema.Attribute.Text;
  };
}

export interface ServicesBlock extends Struct.ComponentSchema {
  collectionName: 'components_services_blocks';
  info: {
    displayName: 'block';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    card: Schema.Attribute.Component<'services.cards', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServicesCards extends Struct.ComponentSchema {
  collectionName: 'components_services_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.options': ContactOptions;
      'services.block': ServicesBlock;
      'services.cards': ServicesCards;
    }
  }
}
