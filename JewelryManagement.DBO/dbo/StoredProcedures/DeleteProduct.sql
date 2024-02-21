-- =============================================
-- Author:		<Nitesh>
-- Create date: <10 Feb 2024>
-- Description:	<Delete product by id>
-- =============================================
CREATE PROCEDURE [dbo].[DeleteProduct]
	@Id INT

AS
BEGIN
DELETE FROM Product
WHERE Id = @Id

END

GO