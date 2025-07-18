export const StatusSection = ({
	status,
	children,
}: {
	status: string
	children: React.ReactNode
}) => {
	return (
		<div className='flex flex-col items-center w-[25rem] gap-5 h-[80vh] border-1 border-blue-400 rounded-2xl bg-blue-50 overflow-scroll'>
			<p className='font-semibold text-blue-800 text-2xl mt-5'>{status}</p>
			<div className='border-b-1 border-blue-400 w-[90%]' />
			<div className='flex flex-col items-center gap-4'>{children}</div>
		</div>
	)
}
