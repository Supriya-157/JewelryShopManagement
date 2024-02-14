-- =============================================
-- Author:		<Nitesh>
-- Create date: <10 Feb 2024>
-- Description:	<get product by id>
-- =============================================
CREATE PROCEDURE [dbo].[GetProductbyid]
	@Id INT 
	AS
BEGIN
	SELECT * FROM Category where Id = @Id

END
	
GO
