import React from 'react';
import {View, TouchableOpacity} from 'react-native'
import ContainerView from '../../../../Components/Globals/ContainerView';
import { AppButton } from '../../../../Components/Globals/Butttons';
import { LargeText, CustomText, TitleText } from '../../../../Components/Globals/Texts';
import { DEFAULT_BORDER_COLOR } from '../../../../Theme/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux';
import { deconnectUser } from '../../../../Store/ApplicationStore';
import { useNavigation } from '@react-navigation/native';

export default function SettingsHomeScreen(){

    const dispatch = useDispatch();


    return (
        <View style={{flex: 1}}>
            <ContainerView style={{paddingBottom: 16}}>
                <View style={{flex: 1}}>
                    <TitleText style={{marginBottom: 18}}>Paramètres</TitleText>
                    <LargeText fontFamily="bold">Général</LargeText>
                    <SettingItem title="Informations du compte" />
                    <SettingItem title="Notifications" />
                    <SettingItem title="Nous contacter" />

                    <LargeText fontFamily="bold" style={{marginTop: 16}}>Plus</LargeText>
                    <SettingItem title="A propos" />
                    <SettingItem link="PolicyScreen" title="Politiques de confidentialités" />
                    <SettingItem link="CGUScreen" title="Condition d'utilisation" />
                    <SettingItem title="FAQ" />
                    <SettingItem title="Supprimer mon compte" />

                </View>
                <AppButton onPress={()=>{
                    dispatch(deconnectUser())
                }}>Deconnexion</AppButton>
            </ContainerView>
        </View>
    )
}


function SettingItem({title, link}){

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={
            () => {
                    if(link)
                        navigation.navigate(link)
            }
        } style={{padding: 8, paddingVertical: 10, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: DEFAULT_BORDER_COLOR, alignItems: 'center'}}>
            <CustomText style={{flex: 1}}>{title}</CustomText>
            <AntDesign name="right" />
        </TouchableOpacity>
    )
}