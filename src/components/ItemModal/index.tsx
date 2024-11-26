import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import TextComponent from '../TextComponent';
import { IItemModalProps } from './types';

import WeponIcon from '../WeponIcon';
import { passiveSprites } from '../../../global/requires';
import { Image } from 'expo-image';

const ItemModal: React.FC<IItemModalProps> = (props: IItemModalProps) => {
  const style = useStyles();

  const requireSprite = passiveSprites['Hollow_Heart']; 

  return (
    <Modal
      transparent
      visible={props.visible}
      onRequestClose={() => {props.setVisible(false)}}
    >
      <View style={style.container}>
        <View style={style.card}>
          <View style={style.header}>
            <View style={style.headerLeft}>
              <WeponIcon image='Whip' />

              <TextComponent 
                text='Whip' 
                bold 
                size={20} 
                styles={style.headerText}  
              />
            </View>

            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => props.setVisible(false)}
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
              <TextComponent text='8' />
            </View>

            <View style={style.contentTopic}>
              <TextComponent 
                text='Unlock'
                bold
              />
              <TextComponent 
                text='Unlock by default' 
                styles={style.contentTopicText}
              />
            </View>

            <TextComponent
              text='Evolution'
              bold
              styles={style.evolutionTitle}
            />

            <View style={style.evolutionContainer}>
              <WeponIcon image='Whip' />

              <View style={style.evolutionInfo}>
                <TextComponent
                  text='Bloody Tear'
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
                    text='at any level'
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