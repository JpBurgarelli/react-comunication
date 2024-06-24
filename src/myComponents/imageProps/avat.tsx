import { ImgHTMLAttributes } from "react";
import styles from './avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
 hasBorder?: boolean;
}

export function Avatar({hasBorder = true, src, alt}: AvatarProps){
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt={alt} 
    />
  )
}

/*
Passando todas as props

export function Avatar({hasBorder = true, src, alt}: AvatarProps){
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt={alt} 
    />
  )
}





*/
