import './nav.css'

export function Nav() {
    return (
        <header>
            <div className='main'>

                    <div className='logo'>
                        <a href="/"><img src="../img/logo.png"  /></a>
                    </div>

                

                <div className='nav-form'>
                    <form >
                        <input type="search"  placeholder='Buscar productos y mas...'/>
                    </form>
                </div>

            </div>
            
        
        </header>
    )
}