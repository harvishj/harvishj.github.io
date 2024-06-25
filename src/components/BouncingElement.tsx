const BouncingElement = () => {
    return (
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-secondary mb-1 animate-bounceY"></div>
        </div>
    );
};

export default BouncingElement;
