import React, { useState } from 'react';
import Modal, { ModalContext } from './Modal';
import Svg, { Icon } from './Svg';
import Toggle from './Toggle';

type NavProps = {
  onToggle: (bool: boolean) => void;
  isChecked: boolean;
  reset: () => void;
};
export enum MenuItem {
  New,
  Save,
  Share,
  Login,
  None,
}
const Nav = ({ onToggle, isChecked, reset }: NavProps) => {
  const [showModal, setShowModal] = useState(MenuItem.None);
  const [modalContext, setModalContext] = useState<ModalContext>();
  const ctaAction = (callBack: () => void) => {
    callBack();
    setShowModal(MenuItem.None);
  };
  return (
    <nav className='fixed justify-between top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm  bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10'>
      <Modal
        item={showModal}
        setShow={setShowModal}
        modalContext={modalContext}
      />
      <span className='text-base'>
        <span className='text-blue-400 rounded-lg pr-1'>Pairs</span>
        Generator
      </span>
      <div className='flex items-center gap-5 '>
        <div
          className='cursor-pointer flex gap-1 items-center hover:text-blue-400 dark:hover:text-blue-300'
          onClick={() => {
            setShowModal(MenuItem.New);
            setModalContext({
              content:
                'Creating a new pairs will override you current pairs. Are you sure you want to do this?',
              primaryBtn: {
                color: 'primary',
                ctaAction: () => ctaAction(() => {}),
                text: 'No, cancel',
              },
              secondaryBtn: {
                color: 'secondary',
                ctaAction: () => ctaAction(reset),
                text: "Yes, I'm sure",
              },
            });
          }}
        >
          <Svg icon={Icon.Add} />
          <span className='text-base'>New</span>
        </div>
        <div
          className='cursor-pointer flex gap-1 items-center hover:text-blue-400 dark:hover:text-blue-300'
          onClick={() => setShowModal(MenuItem.Save)}
        >
          <Svg icon={Icon.Save} />
          <span className='text-base'>Save</span>
        </div>
        <div
          className='cursor-pointer flex gap-1 items-center hover:text-blue-400 dark:hover:text-blue-300'
          onClick={() => setShowModal(MenuItem.Share)}
        >
          <Svg icon={Icon.Share} />
          <span className='text-base'>Share</span>
        </div>
        <div
          className='cursor-pointer flex gap-1 items-center hover:text-blue-400 dark:hover:text-blue-300'
          onClick={() => setShowModal(MenuItem.Login)}
        >
          <Svg icon={Icon.Login} />
          <span className='text-base'>Login</span>
        </div>
        {/* <div className='flex gap-1 items-center'>
        <Svg icon={Icon.User} />
        <span className='text-base'>Jacky</span>
      </div> */}
        <Toggle onToggle={onToggle} isChecked={isChecked} />
      </div>
    </nav>
  );
};

export default Nav;
