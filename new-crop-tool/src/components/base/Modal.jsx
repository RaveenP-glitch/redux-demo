import classNames from 'classnames';

const Modal = ({ open, children }) => {
    return (
        <div
          className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${open ? '' : 'hidden'}`}
          id="modal"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', paddingTop: '4rem', paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '2rem', textAlign: 'center' }} className="sm:block sm:p-0">
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', transition: 'opacity 0.5s' }}>
              <div style={{ position: 'absolute', inset: 0, background: '#1a202c', opacity: 0.2 }}></div>
              <span style={{ display: 'none', verticalAlign: 'middle' }} className="sm:inline-block sm:align-middle sm:h-screen">​</span>
              <div style={{ display: 'inline-block', verticalAlign: 'middle', background: '#fff', textAlign: 'left', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s', position: 'relative', maxWidth: '34rem', borderRadius: '5px', width: '100%' }} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div style={{ background: '#fff', padding: '1rem', paddingTop: '1.25rem', paddingBottom: '1rem' }} className="sm:p-6 sm:pb-4">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Modal;