import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

import useStyles from './styles';
import TextComponent from '../TextComponent';
import { IItemModalProps } from './types';

import WeaponIcon from '../WeaponIcon';
import { IPassiveSpriteKeys } from '../../../global/types';
import { passiveSprites } from '../../../global/requires';

const ItemModal: React.FC<IItemModalProps> = ({visible, setVisible, weapon, type}: IItemModalProps) => {
  const style = useStyles();

  const evolution = weapon.evolution;
  const requireSprite = passiveSprites[evolution.require_sprite as IPassiveSpriteKeys];

  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={style.container}>
        <View style={style.card}>
          <View style={style.header}>
            <View style={style.headerLeft}>
              <WeaponIcon type={type} weapon={weapon} disable />

              <TextComponent 
                text={weapon.name} 
                bold 
                size={20} 
                styles={style.headerText}  
              />
            </View>

            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => setVisible(false)}
            >
              <Ionicons name="close" size={32} color="white" />
            </TouchableOpacity>
            
          </View>

          <View style={style.divider} />

          <View style={style.content}>
            <View style={style.contentTopic}>
              <TextComponent 
                text='Max level'
                bold
              />
              <TextComponent text={weapon.max_level.toString()} />
            </View>

            <View style={style.contentTopic}>
              <TextComponent 
                text='Unlock'
                bold
              />
              <TextComponent 
                text={weapon.unlock_requirements} 
                styles={style.contentTopicText}
              />
            </View>

            <TextComponent
              text='Evolution'
              bold
              styles={style.evolutionTitle}
            />

            <View style={style.evolutionContainer}>
              <WeaponIcon type='evolution' weapon={weapon} disable />

              <View style={style.evolutionInfo}>
                <TextComponent
                  text={evolution.name}
                  bold
                />

                <View style={style.evolutionTopic}>
                  <TextComponent
                    text='Requires'
                    bold
                  />
                  
                  <Image
                    source={requireSprite}
                    style={style.requiredImage}
                  />

                  <TextComponent
                    text={evolution.require_text}
                    styles={style.contentTopicText}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ItemModal;