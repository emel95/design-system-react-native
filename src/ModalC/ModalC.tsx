import React, { useEffect, useState, useCallback } from "react";
import { View, Modal, TouchableOpacity, ModalProps } from 'react-native';
import { Icon } from '..';
import { MaterialCommunityIcons } from '../Icon/Icon.type';
import { styles } from './style';
import type { IModalC } from './ModalC.type';

const ModalC = ({
  open,
  children,
  onClose,
  testId,
  top,
  styleModal,
  colorClose,
  sizeClose,
  styleClose,
  ...otherprops
}: IModalC & ModalProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const size = sizeClose ? sizeClose : 24;
  const color = colorClose ? colorClose : 'red';
  const topModal = top ? top : 0;
  if (!open) {
    return null;
  }
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleCloseModal = useCallback(() => {
    if (onClose !== undefined) onClose;
    setIsOpen(false);
  }, [onClose]);

  return (
    <Modal
      testID={testId} animationType={"fade"} transparent visible={isOpen}
      onRequestClose={handleCloseModal} {...otherprops}>
      <TouchableOpacity activeOpacity={1} style={styles.overlayModal} onPress={handleCloseModal}>
        <View style={[styles.cardModal, { ...styleModal }, { marginTop: topModal }]}>
          <Icon type={MaterialCommunityIcons} name={'close'} style={[styles.iconClose, { ...styleClose }]}
            size={size} color={color} onPress={handleCloseModal} />
          {children}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalC;