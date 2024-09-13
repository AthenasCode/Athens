function Header(props) {
    const { title } = props;
    return (
      <header className="flex justify-center items-center w-full h-[80px] bg-[#F5F5F5] border-b">
        <nav class="absolute top-[10px] left-[10px] right-[10px] h-[100px] bg-[#2C3E50] text-white rounded w-full max-w-full">
            <div class="nav-bar relative h-full max-w-[100px] w-full mx-auto px-[15px] flex items-center justify-between box-border max-w-none ">
                <div class="logo-section flex items-center">
                    <h2 class="logo navLog">Planificación Estratégica del Toyota Corolla 2024</h2>
                </div>
                <div class="right-menu absolute top-[50%] right-[10px] ml-auto transform -translate-y-1/2 list-none">
                    <a href="#" class="estilo inline-block bg[#F4F4F9] text-[#2C3E50] box-border uppercase no-underline" data-id="1">Contact Us</a>
                </div>
            </div>
        </nav>
      </header>
    );
}
       

export default Header;
  