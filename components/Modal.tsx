import FocusTrap from 'focus-trap-react';
import React from 'react';
import { MenuItem } from './Nav';
import Svg, { Icon } from './Svg';

type CTAButton = {
  text: string;
  ctaAction: () => void;
  color: 'secondary' | 'primary';
};
export type ModalContext = {
  content: string;
  primaryBtn: CTAButton;
  secondaryBtn?: CTAButton;
};
type ModalProps = {
  item?: MenuItem;
  setShow?: (m: MenuItem) => void;
  modalContext?: ModalContext;
};
const Modal = ({ item, setShow, modalContext }: ModalProps) => {
  return item !== MenuItem.None ? (
    <FocusTrap focusTrapOptions={{ initialFocus: false }}>
      <div
        id='popup-modal'
        className='flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen bg-slate-500/30 dark:bg-slate-900/80 h-screen'
      >
        <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
          <div className='relative backdrop-blur-xl bg-white/80 dark:backdrop-blur-sm rounded-lg shadow dark:bg-gray-700/40'>
            <button
              type='button'
              onClick={() => setShow!(MenuItem.None)}
              className='absolute top-3 right-2.5 focus:ring-2 focus:outline-none focus:ring-blue-400 dark:focus:ring-blue-100 text-gray-400 hover:text-blue-400 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-blue-100'
              data-modal-toggle='popup-modal'
            >
              <Svg icon={Icon.Close} />
              <span className='sr-only'>Close model</span>
            </button>
            <div className='p-6 text-center pt-14'>
              <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                {modalContext?.content}
              </h3>
              <button
                data-modal-toggle='popup-modal'
                type='button'
                onClick={modalContext?.primaryBtn.ctaAction}
                className='mr-2 text-blue-400 bg-blue-100 hover:bg-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-blue-100 dark:bg-gray-700  dark:text-white dark:hover:bg-gray-400 dark:hover:text-gray-700'
              >
                {modalContext?.primaryBtn.text}
              </button>
              {modalContext?.secondaryBtn && (
                <button
                  data-modal-toggle='popup-modal'
                  type='button'
                  onClick={modalContext?.secondaryBtn.ctaAction}
                  className='text-red-400 bg-red-100 hover:bg-red-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center'
                >
                  {modalContext?.secondaryBtn.text}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  ) : (
    <></>
  );
};
export default Modal;
