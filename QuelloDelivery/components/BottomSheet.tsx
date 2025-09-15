import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop, useBottomSheetModal } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%'], []);
    const renderBackdrop = useCallback((props: any) =>
        <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, [])
    const {dismiss} = useBottomSheetModal();
    return(
        <BottomSheetModal ref={ref} 
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        overDragResistanceFactor={0}
        handleIndicatorStyle={{display: 'none'}}
        backgroundStyle={{backgroundColor : Colors.lightGrey, borderRadius: 0}}
        >
            <BottomSheetView style={styles.contentContainer}>
               <View style={styles.toggle}>
                <TouchableOpacity style={{styles.toggleButton, styles.toogleActive}}>
                    <Text style={activeText}>entrega</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{styles.toggleButton, styles.toogleInactive}}>
                    <Text style={inactiveText}>retirada</Text>
                </TouchableOpacity>
               </View>

                <Text style={styles.subheader}>Minha Localização</Text>
               <Link href={'/'} asChild>
               <TouchableOpacity style={styles.item}>
                    <Ionicons name='location-outline' size={20} color={Colors.medium} />
                    <Text style={{ flex: 1 }}>Localização atual</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.primary}/>
               </TouchableOpacity>
               </Link>
               
                <TouchableOpacity onPress={ () => dismiss() }>
                    <Text>Fechar</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheetModal>
    )
});

export default BottomSheet

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        height: '100%',
    },
})