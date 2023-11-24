export const TestimonialItem = () => {
    return (
        <div className="bg-gray-100 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
            <img className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto" src="/eu.jpg" />
            <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
                <p className="text-lg font-semibold">"Quando comecei era dificil , mas agora é mais. quanto mais eu estudo mais me distancio das coisas"</p>
            
                <div className="font-medium">
                    <p className="text-blue-600 fonr-bold">Rapha di Carli</p>
                    <p className="text-gray-500">Aluno TRYBE</p>
                </div>
            </div>
        </div>
    )
}